import {Row, Col} from 'react-bootstrap'
import Coworking from '../Coworking/Coworking'


const CoworkingList = ({ coworking }) => {
    <Row>
        {coworking.map(coworking => {
            return <Col md={4} key={coworking._id}> <Coworking {...Coworking}/></Col>
        })}
    </Row>
}

export default CoworkingList