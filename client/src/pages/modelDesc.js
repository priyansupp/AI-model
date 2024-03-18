import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from './modelDesc.module.css'
import TextEditor from '../components/quilleditor';

function ModelDesc({ modelName, modelDescription, modelCode }) {
  return (
    <div className ={styles.container}>
    <div className={styles.header}>
      <span>username</span>
      <span>/</span>
      <span>modelname</span>
      </div>
      <div className={styles.column}>
        <div className={styles.tabs}>
            <Tabs defaultActiveKey="column" id="model-tabs" className="mb-3">
              <Tab eventKey="description" title="Description">
               <div className={styles.desc}>
                <p>hi my name is riya. this is my model.
                  i hope you like it.llllllllllllllllllllllllllllllllllllllllllllllllllllllllldsefs csjdcbdshcbdscjds
                  dsedsjefbrjhbf rmfn ksdjNC kj
                </p>
               </div>
              </Tab>
              <Tab eventKey="code" title="Code">
                <div className={styles.modelCode}>
                  <TextEditor/>
                </div>
              </Tab>
            </Tabs>
        </div>
        <div className={styles.metadata}>
        <section class="pt-8 border-gray-100 md:col-span-5 pt-6 md:pb-24 md:pl-6 md:border-l order-first md:order-none">
          <div class="flex justify-between pb-2">
            <dl>
              <dt class="-mb-1 text-sm text-gray-500">
                Downloads last Month
              </dt>
              <dd class="font-semibold">10,765</dd>
            </dl>
            <div class="divider-column-vertical"></div>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
}

export default ModelDesc;