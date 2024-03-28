import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const ReadPage = () => {
      const books = useLoaderData();

    return (
        <div>
           <BarChart width={600} height={600} data={books}
           margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5
          }}>
             <XAxis dataKey="bookName" />
              <YAxis dataKey="totalPages"/>
      

           </BarChart>
        </div>
    );
};

export default ReadPage;

