import React from "react"
import { Card, Header } from 'semantic-ui-react'
// import JournalShow from './JournalShow'
import { connect } from "react-redux"
import { getComments } from '../services/backend'

class CommentCard extends React.Component {

    componentDidMount() {
        getComments().then(data => this.props.dispatch({
            type: 'GET_COMMENTS',
            data
          }))
    }
    
    render() {
        return (
            <div>
                <Card className={'card'} style={{ margin: '0.5em' }} raised={true}>
                    <Card.Header style={{ padding: '0.5em' }} as='h3'>
                        something
                    </Card.Header>
                    <Card.Content style={{ padding: '0.5em'}}>
                        <Card.Description>
                            <Header>
                                Description:
                            </Header>
                            description
                        </Card.Description>

                        <Card.Content>
                            <Header>
                                Flow:
                            </Header>
                            more stuff
                        </Card.Content>

                        <Card.Content >
                            <Header>
                                Height:
                            </Header>
                            more stuff
                        </Card.Content>

                        <Card.Content >
                            <Header>
                                Preferred Charc:
                            </Header>
                            more stuff
                        </Card.Content>

                        <Card.Content >
                            <Header>
                                Quality:
                            </Header>
                           more stuff
                        </Card.Content>

                        <Card.Content>
                            {/* <JournalShow style={{padding: '0.5em'}} journal={this.props} /> */}
                        </Card.Content>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}
export default connect()(CommentCard)