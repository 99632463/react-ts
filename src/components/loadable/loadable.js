import React,{Component} from 'react';

const Loadable = ({loader,loading:Loading}) => {
  return class Loadable extends Component {
    state = {
      LoadedComponent:null
    };
    componentDidMount(){
      loader().then((data) => {
        this.setState({
          LoadedComponent:data.default
        })
      })
    }
    render() {
      const {LoadedComponent} = this.state;

      return (
        <div>
          {
            LoadedComponent
            ?
            <LoadedComponent />
            :
            <Loading />
          }
        </div>
      )
    }
  }
}

export default Loadable;