import React, {Component} from 'react'
import {Field, arrayInsert, arrayRemove} from 'redux-form'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';


import {Grid, InputLabel, Table,TableBody, TableCell, TableHead, TableRow, IconButton, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import RemoveIcon from '@material-ui/icons/Remove';
import Input from '../commom/form/input'

import If from '../commom/operador/if'

class ItemList extends Component{
    add(index, item={}){
        if(!this.props.readOnly){
            this.props.arrayInsert('billingCycleForm', this.props.field, index, item)
        }
    }
    remove(index){
        if(!this.props.readOnly && this.props.list.length > 1){
            this.props.arrayRemove('billingCycleForm', this.props.field, index)
        }
    }
    renderRows(){
        const list = this.props.list || []
        return list.map((item,index) => (
            <TableRow key={index}>
                <TableCell><Field name={`${this.props.field}[${index}].name`} component={Input} placeHolder="Informe o Nome" readOnly={this.props.readOnly2}/></TableCell>
                <TableCell><Field name={`${this.props.field}[${index}].value`} component={Input} placeHolder="Informe o Valor" readOnly={this.props.readOnly2}/></TableCell>
                <If test={this.props.showStatus}>
                    <TableCell><Field name={`${this.props.field}[${index}].status`} component={Input} placeHolder="Informe o Status" readOnly={this.props.readOnly2}/></TableCell>
                </If>
                <TableCell><IconButton color="default" onClick={() => this.add(index + 1)}><AddIcon/></IconButton></TableCell>
                <TableCell><IconButton color="secondary" onClick={() => this.add(index + 1, item)}><FileCopyIcon/></IconButton></TableCell>
                <TableCell><IconButton color="secondary" onClick={() => this.remove(index)}><RemoveIcon/></IconButton></TableCell>
            </TableRow>

        ))
    }
    render(){
        return(
            <Grid item xs={this.props.xs} sm={this.props.sm}>
                <InputLabel>{this.props.legend}</InputLabel>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Valor</TableCell>
                            <If test={this.props.showStatus}>
                                <TableCell>Status</TableCell>
                            </If>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>                                          
                        {this.renderRows()}
                    </TableBody>
                </Table>
            </Grid>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert, arrayRemove}, dispatch)
export default connect(null, mapDispatchToProps)(ItemList)