import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Judges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            judges: [
                {
                  id: 0,
                  name:'judgename-1',
                  image: 'assets/images/logo192.png',
                  category: 'mains',
                  description:'Description of Judge 1 Description of Judge 1 Description of Judge 1 Description of Judge 1'},
               {
                  id: 1,
                  name:'judgename-2',
                  image: 'assets/images/logo192.png',
                  category: 'mains',
                  description:'Description of Judge 2 Description of Judge 2 Description of Judge 2 Description of Judge 2' },
               {
                  id: 2,
                  name:'judgename-3',
                  image: 'assets/images/logo192.png',
                  category: 'mains',
                  description:'Description of Judge 3 Description of Judge 3 Description of Judge 3 Description of Judge 3'                        },
               {
                  id: 3,
                  name:'judgename-4',
                  image: 'assets/images/logo192.png',
                  category: 'mains',
                  description:'Description of Judge 4 Description of Judge 4 Description of Judge 4 Description of Judge 4'  }
               ],
        };
    }

    render() {
        const judges1 = this.state.judges.map((judge) => {
            return (
              <div key={judge.id} className="col-12 mt-5">
                <Media tag="li">
                  <Media left middle>
                      <Media object src={judge.image} alt={judge.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{judge.name}</Media>
                    <p>{judge.description}</p>
                  </Media>
                </Media>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              <Media list>
                  {judges1}
              </Media>
            </div>
          </div>
        );
    }
}

export default Judges;