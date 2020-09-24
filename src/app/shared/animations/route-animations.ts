import { animate, group, query, state, style, transition, trigger } from '@angular/animations';

export const slideRoute = trigger('routeAnimations', [
  transition('* <=> *', [
      group([
        // query(':leave', [
        //     animate(3000, style({
        //         transform: 'translateX(-100%)'
        //       })
        //     )
        //   ], {optional: true}
        // ),
        query(':enter', [
            style({
              transform: 'translateX(100%)'
            }),
            animate(300, style({
                transform: 'translateX(0%)'
              })
            )
          ], {optional: true}
        )
      ])
    ]
  )
]);
