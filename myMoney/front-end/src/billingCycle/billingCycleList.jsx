import React, { Component } from "react";

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getList, showUpdate, showDelete } from './billingCycleActions';

import {Table, TableBody, TableCell, TableHead, TableRow, IconButton} from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import './billingCustom.css'
class BillingCycleList extends Component {
    componentWillMount(){
        this.props.getList()
    }
    renderRows(){
        const list = this.props.list || [];
        return list.map(bc => (
            <TableRow key={bc._id}>
                <TableCell >{bc.name}</TableCell>
                <TableCell align="center">{bc.month}</TableCell>
                <TableCell align="right">{bc.year}</TableCell>
                <TableCell align="right">
                  <IconButton arialabel='update' onClick={() => this.props.showUpdate(bc)} id='buttonListPencil'>
                    <CreateIcon/>
                  </IconButton>
                  <IconButton arialabel='delete' color='secondary' onClick={() => this.props.showDelete(bc)}>
                    <DeleteIcon/>
                  </IconButton>
                </TableCell>
            </TableRow>
        ))
    }
  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="center">Mês</TableCell>
            <TableCell align="right">Ano</TableCell>
            <TableCell align="right" id='acoesHeader'>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {this.renderRows()}
        </TableBody>
      </Table>
    );
  }
}
const mapStateToProps = state => ({list: state.billingCycle.list});
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);
