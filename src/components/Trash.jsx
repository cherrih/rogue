import React from 'react';
import Matter from 'matter-js';
import MatterWrap from 'matter-wrap';
import { Engine, Render, World, Bodies, Mouse, MouseConstraint, Events, Composites } from 'matter-js';

class Trash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      w: window.innerWidth,
      h: window.innerHeight
    };
  }
  
  componentDidMount () {
    const {w, h} = this.state;
    Matter.use(MatterWrap);
    const reference = this.refs.trash
    const engine = Engine.create();
    engine.world.gravity.y = 0.5;
    const render = Render.create({
      element: reference,
      engine: engine,
      options: {
        width: w,
        height: h,
        background: 'transparent',
        wireframes: false
      }
    });
    
    Render.run(render);
    
    const steak = Bodies.rectangle(w/2, 0, 100, 100, {
      render: {
        sprite: {
          texture: '../../images/steak.png',
          xScale: 0.4,
          yScale: 0.4,
          restitution: 1,
          // density: 0.04,
          // friction: 0.01,
          // frictionAir: 0.00001,
        }
      }
    })
    const tampon = Bodies.rectangle(w/2, 0, 100, 100, {
      render: {
        sprite: {
          texture: '../../images/tampon.png',
          xScale: 0.4,
          yScale: 0.4,
          restitution: 1,
          
          inertia: Infinity,
        }
      }
    })
    const bag = Bodies.rectangle(w/2, 0, 100, 100, {
      render: {
        sprite: {
          texture: '../../images/thankyoubag.png',
          xScale: 0.4,
          yScale: 0.4,
          restitution: 1,
          density: 1,
          friction: 0.01,
          frictionAir: 0.00001,
          inertia: Infinity
        }
      }
    })

    // const createShape = function (x,y) {
    //   const images = ['steak', 'tampon', 'thankyoubag'];
    //   return Bodies.rectangle(x, y, 100, 100, {
    //     render: {
    //       sprite: {
    //         texture: `images/${images[i]}.png`,
    //         xScale: 0.5,
    //         yScale: 0.5
    //       }
    //     },
    //     plugin: {
    //       wrap: {
    //         min: { x: 0, y: 0 },
    //         max: { x: w, y: h }
    //       }
    //     }
    //   })
    // }
    const wallOptions = {
      isStatic: true,
      render: {
        visible: false,
        restitution: 1,
        inertia: Infinity
      }
    }

    const ground = Bodies.rectangle(w / 2, h + 50, w + 100, 100, wallOptions)
    const leftWall = Bodies.rectangle(-50, h / 2, 100, h + 100, wallOptions)
    const rightWall = Bodies.rectangle(w + 50, h / 2, 100, h + 100, wallOptions)
    const ceiling = Bodies.rectangle(w / 2, -50, w + 100, 100, wallOptions)

    // const shapes = Composites.stack(50, 50, 10, 10, 40, 40, function (x, y) {
    //   return createShape(x, y)
    // })

    const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });
    // const mouse = MouseConstraint.create(engine, {
    //   element: reference,
    //   constraint: {
    //     render: {
    //       visible: false
    //     }
    //    }
    //  })

    World.add(engine.world, [
      steak,
      ground,
      ceiling,
      leftWall,
      rightWall,
      mouse,
      tampon,
      bag
    ])
    World.add(engine.world, mouseConstraint);

    // Events.on(mouseConstraint, "mousedown", function(event) {
    //   // World.add(engine.world, Bodies.circle(150, 50, 30, { restitution: 0.7 }));
    //   console.log('mouse')
    // });

    Engine.run(engine);
  }

  render () {
    return (
      <div ref="trash" className="trash-container">
      </div>
    )
  }
}

export default Trash;

// // create two boxes and a ground
// var boxA = Bodies.rectangle(400, 200, 80, 80);
// var boxB = Bodies.rectangle(450, 50, 80, 80);
// var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// // add all of the bodies to the world
// World.add(engine.world, [boxA, boxB, ground]);

// // run the engine
// Engine.run(engine);

// // run the renderer
// Render.run(render);