import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { IWritter } from '../models/writer.model';

@Injectable()
export class HttpService {
  public base;
  public baseCache;
  constructor() {
    this.base = firebase
      .initializeApp({
        databaseURL: 'https://writers-project-b9a49.firebaseio.com/',
      })
      .database();
  }

  public caching(): Promise<IWritter[]> {
    // caching of loaded base
    if (this.baseCache) {
      return this.baseCache;
    }
    this.baseCache = this.base
      .ref()
      .once('value')
      .then((item) => item.val());
    return this.baseCache;
  }

  public getFullBase(): Promise<IWritter[]> {
    // get full writers base
    return this.caching();
  }

  public getCardById(id: number): Promise<IWritter> {
    // get writer card by ID
    return this.getFullBase().then((base) => {
      let searchedCard: IWritter;
      base.forEach((card) => (card.id === id ? (searchedCard = card) : null));
      return searchedCard;
    });
  }

  public getCardByName(searchStr): Promise<IWritter[]> {
    // get writer card by name independenly of order
    const searchReq: string = searchStr.toLowerCase();
    function filterReq(item: IWritter, request: string): boolean {
      const name: string = item.name.toLowerCase();
      const surname = item.surname.toLowerCase();
      const patronymic = item.patronymic.toLowerCase();
      return (
        request.includes(name) ||
        request.includes(surname) ||
        request.includes(patronymic) ||
        (name + surname + patronymic).includes(searchReq)
      );
    }

    return this.getFullBase().then((base) =>
      base.filter((card) => filterReq(card, searchReq))
    );
  }

  public getCardByBook(book: string): Promise<IWritter[]> {
    // get writers cards by book name (or part of book name)
    const searchReq = book.toLowerCase();
    function filterReq(item, request): boolean {
      let includes = false;
      item.books.forEach((curBook) => {
        if (curBook.title.toLowerCase().includes(request)) {
          includes = true;
        }
      });
      return includes;
    }

    return this.getFullBase().then((base) =>
      base.filter((card) => filterReq(card, searchReq))
    );
  }

  public getRandomCard(): Promise<IWritter> {
    // get random writer card
    return this.getFullBase().then((base) => {
      const baseValue: IWritter[] = base;
      const randomCardIndex = Math.round(
        (baseValue.length - 1) * Math.random()
      );
      return baseValue[randomCardIndex];
    });
  }

  public setWriterCard(card: IWritter): void {
    // set to the server new writer card
    // tslint:disable-next-line: prefer-const
    let newCardIndex: number;
    this.base
      .ref()
      .once('value')
      .then((base) => newCardIndex = base.val().length)
      .then(() => this.base.ref(newCardIndex).set(card));
  }
}
