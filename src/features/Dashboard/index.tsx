import { useState } from 'react';

import Card from '../../components/Card';
import TabNav from '../../components/TavNav';
import TodosPanel from './fragments/Todos';
import DiagnosisPanel from './fragments/Diagnosis';
import { FindingsPanel } from './fragments/Finding';
import { TABS_IDS, TABS } from './constants';

const Dashboard = () => {
  const [activeId, setActiveId] = useState('todos');

  const renderTabContent = () => {
    switch(activeId){
      case TABS_IDS.todos:
        return <TodosPanel />;
      case TABS_IDS.diagnosis:
        return <DiagnosisPanel />
      case TABS_IDS.finding:
        return <FindingsPanel />;
      default:
        return null;
    }
  }

  return (
    <Card
      title="Agregar dato de salud"
      textClass="text-blue-800"
      BgClass="bg-blue-200"
    >
      <TabNav tabs={TABS} selectedTab={activeId} onTabChange={setActiveId} />
      {renderTabContent()}
    </Card>
  );
};

export default Dashboard;
