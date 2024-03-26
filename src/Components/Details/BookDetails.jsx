import PropTypes from 'prop-types';

const BookDetails = ({book}) => {
  
  console.log(book)
    
    return (
        <div>
            <h1>book:</h1>
        </div>
    );
};
BookDetails.propTypes = {
    book: PropTypes.object
}

export default BookDetails;