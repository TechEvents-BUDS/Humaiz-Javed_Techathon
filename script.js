document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login functionality to be implemented.');
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Sign up functionality to be implemented.');
});

document.getElementById('recordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const recordInput = event.target.querySelector('input');
    if (recordInput) {
        const recordValue = recordInput.value;
        const recordsOutput = document.getElementById('recordsOutput');
        const newRecord = document.createElement('li');
        newRecord.textContent = recordValue;
        recordsOutput.appendChild(newRecord);
        event.target.reset();
    }
});

document.getElementById('symptomForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const symptomInput = event.target.querySelector('input').value;
    const symptomsOutput = document.getElementById('symptomsOutput');
    const newSymptom = document.createElement('li');
    newSymptom.textContent = symptomInput;
    symptomsOutput.appendChild(newSymptom);
    event.target.reset();
    updateSymptomChart(symptomInput);
});

const symptomData = [];
const symptomLabels = [];

function updateSymptomChart(symptom) {
    symptomData.push(symptomData.length + 1); // Dummy data for Y-axis
    symptomLabels.push(Symptom ${symptomData.length});
    
    if (window.symptomChart) {
        symptomChart.data.labels = symptomLabels;
        symptomChart.data.datasets[0].data = symptomData;
        symptomChart.update();
    } else {
        const ctx = document.getElementById('symptomChart').getContext('2d');
        window.symptomChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: symptomLabels,
                datasets: [{
                    label: 'Symptoms Over Time',
                    data: symptomData,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    fill: false,
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}