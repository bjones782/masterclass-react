import React from 'react'
import { connect } from 'react-redux'
import { getComments } from '../services/backend';
import { getStudenData } from '../services/backend';
import { NavLink } from 'react-router-dom';
import { Segment, List } from 'semantic-ui-react'
import CommentCard from '../components/CommentCard'


class Test extends React.Component {

  componentDidMount() {
    getComments().then(data => this.props.dispatch({
      type: 'GET_COMMENTS',
      data
    }));
}

  render() {
    return (
      <div class="container-fluid">
      <div class="row flex-row flex-nowrap row-horizon">
          <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
              <div class="card card-block">
              <p>Card content</p>
              </div>
              
          </div>
          <div class="col-3">
              <div class="card card-block">Card
              <p>Card content</p>
              </div>
              
          </div>
          <div class="col-3">
              <div class="card card-block">Card
              <p>Card content</p>            
              </div>
              
          </div>
          <div class="col-3">
              <div class="card card-block">Card
              <p>Card content</p>
              </div>
              
          </div>
          ...
      </div>
  </div>
)
    }}



const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Test)