import React from 'react';
import { Engine, Render, World, Bodies, Mouse, MouseConstraint, Events, Body } from 'matter-js';

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
        wireframes: false,
      }
    });
    
    Render.run(render);
    Engine.run(engine);
    
    let steak = Bodies.rectangle(w/2, 0, 200, 100, {
      render: {
        sprite: {
          texture: '/images/steak.png',
          xScale: 0.5,
          yScale: 0.5
        }
      },
      restitution: 0.9,
      angle: Math.PI * 0.15,
      id: 'matter-body-steak'
    })
    let tampon = Bodies.circle(w/2 - 1, 0, 80, {
      render: {
        sprite: {
          texture: '/images/tampon.png',
          xScale: 0.5,
          yScale: 0.5,
        }
      },
      restitution: 0.9,
      id: 'matter-body-tampon'
    })
    let bag = Bodies.rectangle(w/2 + 1, 0, 200, 200, {
      render: {
        sprite: {
          texture: '/images/bag.png',
          xScale: 0.08,
          yScale: 0.08,
        },
      },
      angle: Math.PI * 0.15,
      restitution: 0.9,
      id: 'matter-body-bag'
    })
    let paper = Bodies.rectangle(w/2, 0, 200, 100, {
      render: {
        sprite: {
          texture: '/images/paper.png',
          xScale: 0.1,
          yScale: 0.1,
        }
      },
      restitution: 0.9,
      id: 'matter-body-paper'
    })
    let lowfash = Bodies.circle(w/2 + 1, 0, 100, {
      render: {
        sprite: {
          texture: '/images/lowfash.png',
          xScale: 0.1,
          yScale: 0.1,
        }
      },
      restitution: 0.9,
      id: 'matter-body-lowfash'
    })

    const wallOptions = {
      isStatic: true,
      render: {
        visible: false,
      }
    }

    const ground = Bodies.rectangle(w / 2, h + 50, w + 100, 100, wallOptions)
    const leftWall = Bodies.rectangle(-50, h / 2, 100, h + 100, wallOptions)
    const rightWall = Bodies.rectangle(w + 50, h / 2, 100, h + 100, wallOptions)
    const ceiling = Bodies.rectangle(w / 2, -50, w + 100, 100, wallOptions)

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

    World.add(engine.world, [
      ground,
      ceiling,
      leftWall,
      rightWall,
      mouse,
      tampon,
      bag,
      steak,
      paper,
      lowfash
    ])
    World.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    Events.on(mouseConstraint, "mousedown", function(event) {
      // World.add(engine.world, Bodies.circle(150, 50, 30, { restitution: 0.7 }));
      console.log(mouseConstraint.body)
    });
    
  }

  render () {
    return (
      <div ref="trash" className="trash-container">
      </div>
    )
  }
}

export default Trash;
