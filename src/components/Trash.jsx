import React from 'react';
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
    const reference = this.refs.trash
    const engine = Engine.create();
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
    
    const steak = Bodies.rectangle(w/2, 0, 100, 100, {
      render: {
        sprite: {
          texture: '../../images/steak.png',
          xScale: 0.4,
          yScale: 0.4
        }
      },
      restitution: 0.9,
      angle: Math.PI * 0.15,
      inertia: Infinity
    })
    const tampon = Bodies.circle(w/2 - 1, 0, 50, {
      render: {
        sprite: {
          texture: '../../images/tampon.png',
          xScale: 0.4,
          yScale: 0.4,
        }
      },
      restitution: 0.9,
      inertia: Infinity
    })
    const bag = Bodies.rectangle(w/2 + 1, 0, 100, 100, {
      render: {
        sprite: {
          texture: '../../images/thankyoubag.png',
          xScale: 0.4,
          yScale: 0.4,
        },
      },
      angle: Math.PI * 0.15,
      restitution: 0.9,
      inertia: Infinity
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
      steak
    ])
    World.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // Events.on(mouseConstraint, "mousedown", function(event) {
    //   // World.add(engine.world, Bodies.circle(150, 50, 30, { restitution: 0.7 }));
    //   console.log('mouse')
    // });
    
  }

  render () {
    return (
      <div ref="trash" className="trash-container">
      </div>
    )
  }
}

export default Trash;
