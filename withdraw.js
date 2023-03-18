const { useState, useContext, useEffect } = React;
function Withdraw() {
 
  return (
    <Card
      bgcolor="dark"
      header="Deposit"
      body={
        <CountBalance title="Withdraw Amount" type="withdraw"/>
      }
    />
  );
}
