import * as React from "react";

/**
 * This is like a 'Home component properties interface', blueprint.
 */
interface HomeProps {
  name: string,
  age: number
}

export class Home extends React.Component<HomeProps> {
  render() {
    return (
      <div>
        <p>Hello there {this.props.name}, you are {this.props.age}, right?</p> 
        <p>How are you?</p>
      </div>
    );
  }
}
