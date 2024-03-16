import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function ModelDesc({ modelName, modelDescription, modelCode }) {
  return (
    <div>
      <h1>modelName</h1>
      <Tabs defaultActiveKey="description" id="model-tabs" className="mb-3">
        <Tab eventKey="description" title="Description">
          <div>{modelDescription}</div>
        </Tab>
        <Tab eventKey="code" title="Code">
          <div>{modelCode}</div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default ModelDesc;
