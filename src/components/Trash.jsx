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
    let imessage = Bodies.circle(w/2 - 1, 0, 80, {
      render: {
        sprite: {
          texture: '/images/SMS.png',
          xScale: 0.05,
          yScale: 0.05,
        }
      },
      restitution: 0.9,
      id: 'matter-body-imessage'
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
      lowfash,
      imessage
    ])
    World.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    Events.on(mouseConstraint, "mousedown", function(event) {
      // World.add(engine.world, Bodies.circle(150, 50, 30, { restitution: 0.7 }));
      console.log('click')
      if (mouseConstraint.body) {
        if (mouseConstraint.body.id === 'matter-body-paper') {
          
        }
        // var nextFrame = 'player_' + player.animations.currentFrame + '.png';

        // player.render.sprite.texture = nextFrame;
        // Composite.setModified(world, true, false, true);
      }
    });
    // setTimeout(() => {
    //   Body.setStatic(paper, true);
    //   var py = 300 + 100 * Math.sin(engine.timing.timestamp * 0.002);
    //   Body.setVelocity(paper, { x: paper.position.x, y: py - paper.position.y });
    //   Body.setPosition(paper, { x: paper.position.x, y: py });

    //   // Body.setVelocity(paper, { x: 0, y: 300 + 100 * Math.sin(engine.timing.timestamp * 0.002) - paper.position.y });
    //   // Body.setAngularVelocity(paper, 0.02);
    //   // Body.setPosition(paper, { x: w/2, y: h/2 })
    //   // paper.render.sprite.texture = '/images/lowfash.png';
    //   setTimeout(() => {
    //     paper.render.sprite.texture = '/images/paper1.png';
    //   }, 200)
    //   setTimeout(() => {
    //     paper.render.sprite.texture = '/images/paper2.png';
    //   }, 400)
    //   setTimeout(() => {
    //     paper.render.sprite.texture = '/images/paper2.png';
    //   }, 600)
    //   setTimeout(() => {
    //     paper.render.sprite.texture = '/images/paper4.png';
    //   }, 800)
    // }, 5000);

    // var lastTime;
    // function main() {
    //   var now = Date.now();
    //   var dt = (now - lastTime) / 1000.0;

    //   update(dt);
    //   render();

    //   lastTime = now;
    //   requestAnimFrame(main);
    // };
    
  }

  render () {
    return (
      <div ref="trash" className="trash-container">
      </div>
    )
  }
}

export default Trash;
