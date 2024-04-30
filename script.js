var tableList = document.getElementById('table_list_student');

let studentList = [];

function RenderList() {
    var tablebody = tableList.querySelector('tbody');
    tablebody.innerHTML = '';

    studentList.forEach(student => {
        var row = document.createElement('tr');
        var Ten_cell = document.createElement('td');
        var NS_cell = document.createElement('td');
        var GT_cell = document.createElement('td');
        var CN_cell = document.createElement('td');

        Ten_cell.textContent = student.ten;
        NS_cell.textContent = student.ns;
        GT_cell.textContent = student.gt;
        CN_cell.textContent = student.cn;

        row.appendChild(Ten_cell);
        row.appendChild(NS_cell);
        row.appendChild(GT_cell);
        row.appendChild(CN_cell);

        tablebody.appendChild(row);
    });
}

RenderList();

function ShowInfo(event) {
    event.preventDefault();

    var ten = document.getElementById('ten').value;
    var chuyennganh = document.getElementById('chuyennganh');
    var rdNam = document.getElementById('rd_nam');
    var rdNu = document.getElementById('rd_nu');
    var ns = document.getElementById('dtpk').value;

    var selectedIndex = chuyennganh.selectedIndex;
    var cn = chuyennganh.options[selectedIndex].textContent;
    var gt;

    if (rdNam.checked) {
        gt = rdNam.nextElementSibling.textContent;
    }
    if (rdNu.checked) {
        gt = rdNu.nextElementSibling.textContent;
    }

    var newStudent = { ten, ns, gt, cn };

    studentList.push(newStudent);
    RenderList();

    document.getElementById('ten').value = '';
    rdNam.checked = false;
    rdNu.checked = false;
    document.getElementById('dtpk').value = '';
}