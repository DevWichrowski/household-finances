import React from 'react';
import './CategoryColumn.scss';
import { List, Icon } from 'antd';

export default function CategoryColumn(props) {
	return (
		<div className="CategoryColumn">
			<List
				header={
					<div>
						<Icon id={`${props.arrow}`} type={`${props.arrow}`} /> <strong>Income categories</strong>
					</div>
				}
				itemLayout="horizontal"
				dataSource={props.dataSource}
				renderItem={(item) => <List.Item> {item} </List.Item>}
			/>
		</div>
	);
}
