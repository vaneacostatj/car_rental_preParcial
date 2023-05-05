import * as React from 'react';
import { DataTable } from 'react-native-paper';


const TableComponentCar = () =>{
  return (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={{flex: 5}}>Plate Number</DataTable.Title>
          <DataTable.Title style={{flex: 3}} >Brand </DataTable.Title>
          <DataTable.Title style={{flex: 5}}>State </DataTable.Title>
        </DataTable.Header>
      </DataTable>
  )
};

const TableRowComponentCar = (props) => {

  const vehiculos = props.data

  return(
    <DataTable>
      {vehiculos.map((car)=>(
        <DataTable.Row key={car.placa}>
          <DataTable.Cell style={{flex: 5}}>{car.placa}</DataTable.Cell>
          <DataTable.Cell style={{flex: 3}}>{car.marca}</DataTable.Cell>
          <DataTable.Cell style={{flex: 5}}>{car.estado}</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  )
};

export {
  TableComponentCar,
  TableRowComponentCar,
};