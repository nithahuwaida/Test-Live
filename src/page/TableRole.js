import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Table } from 'antd';

const TableRole = () => {
    const [dataTable, setDataTable] = useState()
    const fetchData = async()=>{
        const token = localStorage.getItem('token');
        await Axios.get(
            'http://api.smarthealthy.co.id//user/role/index?search=&page=&perpage=',
            {headers : {
                'Authorization': `Bearer ${token}`,
                'api-key': 'AQIS83nanwPd12sTWM0T2GQSSadQvaHLGBb'
        }}
        ).then(response => 
            setDataTable(response.data.data.data)
        )
    }

    useEffect(() => {
        const timeOut = setTimeout(() => {
            fetchData()
        }, 0);

        return () => clearTimeout(timeOut);
    }, []);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'description',
            dataIndex: 'description',
            key: 'description',
        },
    ];
    
    return (
        <div>
            <Table dataSource={dataTable} columns={columns} />
        </div>
    )

}

export default TableRole;