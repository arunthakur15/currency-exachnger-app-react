import { Bar } from 'react-chartjs-2';

const HistoricalData = ({cur}) => {
    return (
        <div className='mt-3 p-2'>
            <h4>Charts</h4>
            <Bar
            data={{
                labels:[cur.to],
                datasets: [
                    {
                      id: 1,
                      label: 'Jan',
                      data: [5, 6, 7],
                      backgroundColor:['red']
                    },
                    {
                      id: 2,
                      label: 'Feb',
                      data: [3, 2, 1],
                      backgroundColor: ['green']
                    },
                  ]
            }}
            />
        </div>
    )
}

export default HistoricalData;