const api_url = 'https://kontests.net/api/v1/all';

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	// document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Name</th>
		<th>Url</th>
		<th>StartTime</th>
		<th>EndTime</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data) {
        r.start_time = new Date(`${r.start_time}`);
        r.start_time.toString();
        r.end_time = new Date(`${r.end_time}`);
        r.end_time.toString();
		tab += `<tr>
	<td>${r.name} </td>
	<td>${r.url}</td>
	<td>${r.start_time}</td>
	<td>${r.end_time}</td>		
</tr>`;
	}
	// Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
    // console.log(data);
}
