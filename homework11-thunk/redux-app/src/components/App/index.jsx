import React from 'react';
import FilterForm from '../FilterForm';
import ServiceForm from '../ServiceForm';
import ServiceList from '../ServiceList';

export default function App() {
  return (
    <div className="container">
      <ServiceForm />
      <FilterForm />
      <ServiceList />
    </div>
  );
}
