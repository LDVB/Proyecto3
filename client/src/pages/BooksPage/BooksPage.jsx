import Books from "../../components/Books/Books"
import {Row, Col} from 'react-bootstrap'


const BooksPage = ({books}) => {

    return (
        <Row>
            {books.map(book => {
            return <Col md={4} key={book._id}> <Books {...book}/></Col>

            })}
        </Row>

    )

}

export default BooksPage