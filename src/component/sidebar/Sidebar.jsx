import React from "react";
import SkyLight from "react-skylight";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section>
          <button onClick={() => this.simpleDialog.show()}>Open Modal</button>
        </section>
        <SkyLight
          hideOnOverlayClicked
          ref={ref => (this.simpleDialog = ref)}
          title="Hi, I'm a simple modal"
        >
          Hello, I dont have any callback.
        </SkyLight>
      </div>
    );
  }
}

Sidebar.displayName = "Example";

export default Sidebar;
