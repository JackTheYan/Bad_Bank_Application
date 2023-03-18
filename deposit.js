const { useState, useContext, useEffect } = React;
function Deposit() {
  
  return (
    <Card
      bgcolor="dark"
      header="Deposit"
      body={
        <CountBalance title="Deposit Amount" type="add"/>
      }
    />
  );
}
