let id = "no";
selectData();
function manageData()
{
	let name = document.getElementById('name').value;
	if(name == '')
	{
		alert("Please Enter Name");
	}
	else
	{
		if(id == 'no') // add the data 
		{
			let arr = getData();
			if(arr == null) // array is null
			{
				let data = [name];
				setData(data);
			}
			else //array is not null
			{
				arr.push(name);
				setData(arr);
			}
			alert('Data inserted');
			document.getElementById('name').value = '';
			selectData();
		}
		else //edit data
		{
			let arr = getData();
			arr[id] = name;
			setData(arr);
			alert("Data Updated")
		}
		document.getElementById('name').value = '';
		selectData();
		location.reload(true);
	}

}

function selectData(){
	let arr = getData();
	if(arr != null){
		let html = '';
		let sno = 1;
		for(let k in arr)
		{
			html = html + 
			`<tr>
				<td>${sno}</td>
				<td>${arr[k]}</td>
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
	document.getElementById('name').value = arr[id1];
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
	let arr = JSON.parse(localStorage.getItem('data1'));
	return arr;
}

function setData(arr)
{
	localStorage.setItem('data1',JSON.stringify(arr));
}
