import React from 'react'
import Select from 'react-select'

function Schedule() {
	const options = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' }
	]

	return (
		<div className="container">
			<div className="group">
				<p>- Schedule -</p>
				<p>Body</p>
				<Select options={options} />
				<p>Course</p>
				<Select options={options} />
				<p>Location</p>
				<Select options={options} />
			</div>
		</div>
	)
}

export default Schedule
