import React from 'react';
import { Button, Card, Image, Divider} from 'semantic-ui-react';
import ls from 'local-storage';
import { connect } from 'react-redux'
// import { addHerbToCollection } from '../fetches/backend';


class LessonPlanCard extends React.Component{
    // state = {herbToggle: false}
    // handleAddHerb = (e) => {
    //     const user_id = ls.get('id')
    //     const herb_id = this.props.id
    //     const jwt = ls.get('jwt')
    //     const array = this.props.userHerbs
    //     const herb_included = array.filter(herb => herb.id === herb_id)
    //     if(herb_included === undefined  || herb_included.length === 0){
    //         this.setState({herbToggle: !this.state.herbToggle})
    //         alert('Herb Added To Collection')
    //         return addHerbToCollection(user_id, herb_id, jwt).then(console.log)
    //     }else{ 
    //         alert('Herb Currently In Collection')  
    //         return null
    //     }
        
       
    // }
    render(){
        return(
            <div>
            <Card>
                <Card.Content>
                    <Image src=""/>
                    <Divider/>
                    <Card.Header textAlign='center'>Name</Card.Header>
                    <Divider/>
                    <Card.Meta textAlign='center'>other</Card.Meta>
                    <Card.Description>
                    <strong>Uses:</strong> more
                    Caution: <strong>stuff</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    {/* {this.state.herbToggle ? null : <Button basic color='green' onClick={this.handleAddHerb} content='Add To Collection'/>} */}
                    </div>
                </Card.Content>
            </Card>
            <Divider/>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(LessonPlanCard);