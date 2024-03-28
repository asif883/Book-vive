import { useLoaderData} from 'react-router-dom';
import { BarChart, Bar,  XAxis, YAxis} from 'recharts';




const ReadPage = () => {
      const books = useLoaderData();
     
      

    return (
        <div>
           <BarChart width={900} height={600} data={books}
           margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5
          }}>
             <XAxis dataKey="bookName" />
              <YAxis dataKey="totalPages"/>
              <Bar
                dataKey="totalPages"
                fill="#00C29C"
                
             >
        </Bar>

           </BarChart>
        </div>
    );
};

export default ReadPage;

