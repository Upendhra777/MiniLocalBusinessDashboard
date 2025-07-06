import { AiFillStar } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'
import { GiBrain } from 'react-icons/gi'
import './index.css'

const BusinessCard = (props) => {
  const { data, onRegenerate } = props;
  
  if (!data) return null;

  return (
    <div className="card">
        <div className='card-items'>
            <AiFillStar className='icons' />
            <p className='items-names'>Rating: <span className='items-values'>{data.rating}</span></p>
        </div>
        <div className='card-items'>
            <FaRegEdit className='icons' />
            <p className='items-names'>Reviews: <span className='items-values'>{data.reviews}</span></p>
        </div>
        <div className='card-items'>
            <GiBrain className='icons' />
            <p className='items-names'>Headline: <span className='items-values'>{data.headline}</span></p>
        </div>
      <button onClick={onRegenerate} className="regenerate-btn">
        Regenerate SEO Headline
      </button>
    </div>
  );
};

export default BusinessCard;
