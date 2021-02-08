import React from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import TabPanel from "@material-ui/lab/TabPanel";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import ListIcon from '@material-ui/icons/List';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { bindActionCreators } from 'redux';
import { selectTab,disableTabtrue } from './tabActions';
import {tabUpdate} from '../../billingCycle/billingCycleActions'
import { connect } from 'react-redux';

const Tabelas = (props) => {
  const view = props.tab.visible;
  function select(tab){
    props.selectTab(tab) 
    props.disableTabtrue()
  }
  return (
    <Paper square elevation={5}>
      <TabContext  centered value={props.tab.selected} indicatorColor="primary" textColor="primary">
        <TabList centered >
          <Tab label="Listar"  onClick={() => select('1')} value="1" icon={<ListIcon/>}/>
          <Tab label="Incluir" onClick={() => props.tabUpdate()} value="2" icon={<AddIcon/>}/>
          <Tab label="Alterar" onClick={() => props.selectTab('3')} disabled={view}  value="3" icon={<CreateIcon/>}/>
          <Tab label='Excluir' onClick={() => props.selectTab('4')} disabled={view} value='4'icon={<DeleteIcon/>}/>
        </TabList>
        <TabPanel value='1'>{props.lista}</TabPanel>
        <TabPanel value='2'>{props.formAdd}</TabPanel>
        <TabPanel value='3'>{props.formUpdate}</TabPanel>
        <TabPanel value='4'>{props.formDelete}</TabPanel>
      </TabContext>
    </Paper>
  );
};
const mapStateToProps = state => ({ tab : state.tab})
const mapDispatchToProps = dispatch => bindActionCreators({selectTab, disableTabtrue, tabUpdate}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Tabelas);
