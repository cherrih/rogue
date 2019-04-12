import React from 'react';
import { Engine, Render, World, Bodies, Mouse, MouseConstraint, Events } from 'matter-js';

class Trash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      w: window.innerWidth,
      h: window.innerHeight
    };
  }
  componentDidMount () {

    var engine = Engine.create();
    var render = Render.create({
        element: this.refs.trash,
        engine: engine,
        options: {
          width: this.state.w,
          height: this.state.h,
          background: 'transparent',
          wireframes: false
        }
    });
    var ballA = Bodies.circle(210, 100, 30, { restitution: 0.5 });
    var ballB = Bodies.circle(110, 50, 30, { restitution: 0.5 });
    // World.add(engine.world, [
    //   // walls
    //   Bodies.rectangle(200, 0, 600, 50, { isStatic: true }),
    //   Bodies.rectangle(200, 600, 600, 50, { isStatic: true }),
    //   Bodies.rectangle(260, 300, 50, 600, { isStatic: true }),
    //   Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
    // ]);
    World.add(engine.world, [ballA, ballB]);
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });
    World.add(engine.world, mouseConstraint);

    Events.on(mouseConstraint, "mousedown", function(event) {
      World.add(engine.world, Bodies.circle(150, 50, 30, { restitution: 0.7 }));
    });

    Engine.run(engine);

    Render.run(render);
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