import React, { useEffect, useState } from 'react';
import { Button, Space, Table } from 'antd';
import api from '../../services/axiosInstances';
import API_ENDPOINTS from '../../services/axiosEndpoints';
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    application: 'Submitted',
    payment: 'Paid',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    application: 'Not Submitted',
    payment: 'Not Paid',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    application: 'Not Submitted',
    payment: 'Paid',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    application: 'Submitted',
    payment: 'Not Paid',
  },
];
const UserTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  const setAgeSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'age',
    });
  };
  const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        ellipsis: true,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Application status',
      dataIndex: 'application',
      key: 'application',
      filters: [
        {
            text: 'Not Submitted',
            value: 'Not Submitted',
        },
        {
          text: 'Submitted',
          value: 'Submitted',
        },

      ],
      filteredValue: filteredInfo.application || null,
      onFilter: (value, record) => record.application.includes(value),
      sorter: (a, b) => a.application.length - b.application.length,
      sortOrder: sortedInfo.columnKey === 'application' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Payment',
      dataIndex: 'payment',
      key: 'payment',
      filters: [
        {
            text: 'Not Paid',
            value: 'Not Paid',
          },
        {
          text: 'Paid',
          value: 'Paid',
        },

      ],
      filteredValue: filteredInfo.payment || null,
      onFilter: (value, record) => record.payment.includes(value),
      sorter: (a, b) => a.payment.length - b.payment.length,
      sortOrder: sortedInfo.columnKey === 'payment' ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];
  const fetchData = async () => {
    try {
      const response = api.get(API_ENDPOINTS.ALL_USERS);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };
  return (
    <>
      <Space
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table columns={columns} dataSource={data} loading={loading} onChange={handleChange} />
    </>
  );
};
export default UserTable;