import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Accordion,
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Modal,
  Progress,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'


const GreenRoof = () => (

 
<Progress percent={18.6395592} value='1,962' total='10,526' progress='ratio'  inverted color='green' 
/>
  

)


function MyModal() {


  
    const [open, setOpen] = React.useState(false)
  
  
  
      return (
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={
            <Grid verticalAlign='middle' columns={2} centered>
  
            <Button  size='huge' inverted color='green' style={{
        
            fontWeight: 'normal',
        
            marginBottom: 30
      }}>Learn How</Button>
            
  
          </Grid>}
        >
          <Modal.Header>Green Roofs</Modal.Header>
          <Modal.Content>
          <Grid>
  
           <Grid.Column width = {16}>
              
  
            <p>
              Walmart is committed to maintaining our beautiful planet and offsetting our impact on the environment. That's why we've begun an initiative
              to convert all 10,526 stores and clubs into having green roofs, equaling almost 2 billion square feet reaping the numerous beneftis of green roofs.
              <br></br><br></br>
              What are the benefits of green roofs? Green rooftops reduce and filter polluted air, reduce temperatures and the urban heat island effect, and provide
              good insulation, keeping our buildings cool in the summer and warm in the winter, reducing our facilities' heating and cooling consumption.
              <br></br><br></br>
              Green roofs are the next step Walmart is taking to become a regenerative company dedicated to placing nature and humanity at the center of our
              business practices. By being a Walmart customer, you are supporting a sustainable company committed to preserving our environment and ensuring
              a better future for our planet.
            </p>
            </Grid.Column>
  
            
          </Grid>
          </Modal.Content>
          <Modal.Actions>
          
  
            <Button
              content="Close"
              labelPosition='right'
              icon='checkmark'
              onClick={() => setOpen(false)}
              positive
            />
          </Modal.Actions>
        </Modal>
      )
}






const HomepageHeading = ({ mobile }) => (
  
  <Container text>
    <Header
      as='h1'
      content='Walmart Sustainability'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Using our strengths to help people live better and preserve the planet.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
        marginBottom: 50
      }}
    />
    {MyModal()}
    
    <Header
      as='h2'
      content='Number of Walmart locations with Green Roofs:'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
        marginBottom: 30
      }}
      />
    <GreenRoof/>
    
  </Container>
)
        



class DesktopContainer extends Component {


  render() {


    return (
   
       
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 1000 }}
            vertical
          >
           
            <HomepageHeading />
          </Segment>
        

  
     
    )
  }
}





export default DesktopContainer