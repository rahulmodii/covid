import React from 'react';
import Card from 'react-bootstrap/Card'
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import Axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases:0,
      death:0,
      recovered:0
    };
  }
 async componentDidMount(){
    await Axios.get('https://coronavirus-19-api.herokuapp.com/countries/India').then((res)=>this.updatesuccess(res)).catch((err)=>console.log(err))
  }
  updatesuccess = (res) =>{
    // console.log(res.data)
    this.setState({
      cases:res.data.cases,
      death:res.data.deaths,
      recovered:res.data.recovered
    });

  }
  render() {
    return (
      <div className="row" style={{background:'#2f4f4f', height: '100vh' }}>
        <div className="col-md-4"></div>
        <div className="col-md-4" style={{ textAlign: "center", alignSelf: 'center', color: 'white', padding: 5, }}>
          <Card style={{ border: '1px solid black', backgroundColor: '#181819' }}>
            <Card.Body>
              <Card.Title style={{ fontSize: 50 }}>Corona Count India</Card.Title>
              <hr></hr>
              <ReactMinimalPieChart
                animate={true}
                animationDuration={500}
                animationEasing="ease-out"
                cx={50}
                cy={50}
                data={[
                  {
                    color: '#ffff00',
                    title: 'Coronavirus Cases',
                    value: this.state.cases
                  },
                  {
                    color: '#ff0025',
                    title: 'Deaths',
                    value: this.state.death
                  },
                  {
                    color: '#49b675',
                    title: 'Recovered',
                    value: this.state.recovered
                  }
                ]}
                label
                labelPosition={60}
                labelStyle={{
                  fontFamily: 'sans-serif',
                  fontSize: '5px'
                }}
                lengthAngle={360}
                lineWidth={20}
                onClick={undefined}
                onMouseOut={undefined}
                onMouseOver={undefined}
                paddingAngle={18}
                radius={50}
                rounded
                startAngle={0}
                viewBoxSize={[
                  100,
                  100
                ]}
              />

              <Card.Text>
                <small className="text-muted" style={{ color: 'white' }}>Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4" ></div>

      </div>
      // <div></div>

    );
  }
}

export default App;