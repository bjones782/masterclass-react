import React from 'react';
import { NavLink } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import {
    Container,
    Grid,
    Header,
    Image,
    List,
    Divider,
    Segment,
    Icon, 
    Card
  } from 'semantic-ui-react'


const Resources=()=> {
    return(
        <div className="bg5">

            <Container textAlign='center'>
            
            <Card className="resourcecard">
                <Image className="resource" as='a' href="https://www.khanacademy.org/" src='https://images.financialexpress.com/2018/08/khan-academy.jpg' wrapped ui={false} width="200" />
                <Card.Content>
                 <Card.Header className="resourceheader"><strong>Khan Academy</strong></Card.Header>
                 {/* <Card.Meta>Joined in 2016</Card.Meta> */}
                 <Card.Description className="resourcedesc">
                 Khan Academy provides free educational content in the form of instructional videos and practice exercises covering different subjects including math, chemistry, physics, science, arts, humanities and many more.
                 </Card.Description>
                </Card.Content>
            </Card>

            <Card className="resourcecard">
                <Image className="resource" as='a' href="https://www.zearn.org" src='https://pbs.twimg.com/profile_images/854398353584660481/u3e_icdf_400x400.jpg' wrapped ui={false} width="200" />
                <Card.Content>
                 <Card.Header className="resourceheader"><strong>Zearn</strong></Card.Header>
                 {/* <Card.Meta>Joined in 2016</Card.Meta> */}
                 <Card.Description className="resourcedesc">
                 Zearn is a nonprofit organization on a mission to ensure all children love learning math.
                 </Card.Description>
                </Card.Content>
            </Card>

            <Card className="resourcecard">
                <Image className="resource" as='a' href="https://www.reflexmath.com/" src='http://seekvectorlogo.com/wp-content/uploads/2019/04/explorelearning-reflex-vector-logo.png' wrapped ui={false} width="200" />
                <Card.Content>
                 <Card.Header className="resourceheader"><strong>Reflex Math Fluency</strong></Card.Header>
                 {/* <Card.Meta>Joined in 2016</Card.Meta> */}
                 <Card.Description className="resourcedesc">
                 Adaptive and individualized, Reflex is the most effective system for mastering basic facts in addition, subtraction, multiplication and division for grades 2+.
                 </Card.Description>
                </Card.Content>
            </Card>

            <Card className="resourcecard">
                <Image className="resource" as='a' href="https://www.ixl.com/" src='http://www.flashbrowser.com/APN/image/pconnect/cache/ixl/app_icon_V4-500x500.png' wrapped ui={false} width="200" />
                <Card.Content>
                 <Card.Header className="resourceheader"><strong>IXL</strong></Card.Header>
                 {/* <Card.Meta>Joined in 2016</Card.Meta> */}
                 <Card.Description className="resourcedesc">
                 On IXL, math is more than just numbers. With unlimited questions, engaging item types, and real-world scenarios, IXL helps learners experience math at its most mesmerizing!
                 </Card.Description>
                </Card.Content>
            </Card>

            <Card className="resourcecard">
                <Image className="resource" as='a' href="https://www.readworks.org/" src='https://d1e2bohyu2u2w9.cloudfront.net/education/sites/default/files/tlr-blog/readworks-logo.png' wrapped ui={false} width="200" />
                <Card.Content>
                 <Card.Header className="resourceheader"><strong>ReadWorks</strong></Card.Header>
                 {/* <Card.Meta>Joined in 2016</Card.Meta> */}
                 <Card.Description className="resourcedesc">
                 ReadWorks is driven by cognitive science research
                 </Card.Description>
                </Card.Content>
            </Card>

            <Card className="resourcecard">
                <Image className="resource" as='a' href="https://www.commoncoresheets.com/" src='https://image2.owler.com/4367157-1447684660982_thumbnail.png' wrapped ui={false} width="200" />
                <Card.Content>
                 <Card.Header className="resourceheader"><strong>Common Core Sheets</strong></Card.Header>
                 {/* <Card.Meta>Joined in 2016</Card.Meta> */}
                 <Card.Description className="resourcedesc">
                 The best source for free math worksheets. Easier to grade, more in-depth and best of all... 100% FREE!
                 </Card.Description>
                </Card.Content>
            </Card>

            <Card className="resourcecard">
                <Image className="resource" as='a' href="https://www.edhelper.com/" src='http://www.edhelperclipart.com/edhelp2.gif' wrapped ui={false} width="300" />
                <Card.Content>
                 <Card.Header className="resourceheader"><strong>EdHelper</strong></Card.Header>
                 {/* <Card.Meta>Joined in 2016</Card.Meta> */}
                 <Card.Description className="resourcedesc">
                 The best source for free math worksheets. Easier to grade, more in-depth and best of all... 100% FREE!
                 </Card.Description>
                </Card.Content>
            </Card>

            <Card className="resourcecard">
                <Image className="resource" as='a' href="http://studyjams.scholastic.com/studyjams/" src='https://i.pinimg.com/originals/1e/42/15/1e4215c476c3a998cf4cb749776ce322.jpg' wrapped ui={false} width="300" />
                <Card.Content>
                 <Card.Header className="resourceheader"><strong>Study Jams</strong></Card.Header>
                 {/* <Card.Meta>Joined in 2016</Card.Meta> */}
                 <Card.Description className="resourcedesc">
                 Introduce and reinforce more than 200 math and science topics with videos, slideshows, step-by-step tutorials, and other activities.
                 </Card.Description>
                </Card.Content>
            </Card>
           
            </Container>

        </div>
    )
}

export default Resources;