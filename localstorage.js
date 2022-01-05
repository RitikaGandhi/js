let id = "no";
selectData();
function manageData1()
{
	let name = document.getElementById('name').value;
	let num = document.getElementById('num').value;
	if(name == '' && num == '')
	{
		alert("Please Enter Name");
	}
	else
	{
		if(id == 'no') // add the data 
		{
				let data = getData() || [];
				data.push({name,num});
				setData(data);
	
				alert('Data inserted');
				document.getElementById('name').value = '';
				document.getElementById('num').value = '';
				selectData();
		}
		else //edit data
		{
			let arr = getData();
			arr[id].name = name;
			arr[id].num = num;
			setData(arr);
			alert("Data Updated")
		}
		document.getElementById('name').value = '';
		selectData();
		location.reload(true);
	}
}
function selectData(){
	let arr = JSON.parse(localStorage.getItem('data'));
	if(arr != null){
		let html = '';
		let sno = 1;
		for(let k in arr)
		{
			html = html + 
			`<tr>
				<td>${sno}</td>
				<td>${arr[k].name}</td>
				<td>${arr[k].num}</td>
				<td>
				<a href="javascript:void(0)" onClick="editData(${k})">Edit</a> ||
				<a href="javascript:void(0)" onClick="deleteData(${k})">Delete</a> 
				</td>
			  </tr>`;
			sno++;
		}
		document.getElementById("root").innerHTML = html;
	}
}
function editData(id1){

	id = id1
	let arr = getData();
	document.getElementById('name').value = arr[id1].name;
	document.getElementById('num').value = arr[id1].num;

}
function deleteData(id)
{
	if(confirm("Are you sure?"))
	{
		let arr = getData();
		arr.splice(id,1);
		setData(arr);
		selectData();
	}
}
function getData()
{
	let arr = JSON.parse(localStorage.getItem('data'));
	return arr;
}
function setData(data)
{
	localStorage.setItem('data',JSON.stringify(data));
}
