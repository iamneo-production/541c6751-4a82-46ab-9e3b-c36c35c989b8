# 541c6751-4a82-46ab-9e3b-c36c35c989b8
https://sonarcloud.io/summary/overall?id=examly-test_541c6751-4a82-46ab-9e3b-c36c35c989b8


## Website
#### Run the following commands
1. Run `pip install -r requirements.txt`
2. Navigate to `server` folder and run `python3 app.py`. The app must be run only after navigating to the server folder
3. The website should be up and running

## Models

1. Navigate to `model` folder.

There are two .ipynb files 
1. Weather Data Cleanup
2. Multi-Variate-Forecasting

### Weather Data Cleanup
##### NOTE: THIS STEP IS NOT REQUIRED. THE DATA HAS ALREADY BEEN CLEANED UP. HOWEVER, YOU CAN CHOOSE TO RUN SO IF NEEDED.
Weather Data Cleanup is the file that can be run to clean the data that was provided in the competition webpage.
Simply run all the code blocks. The cleaned files are exported to the `cleaned_data` folder.

### Multi-Variate-Forecasting
1. Multi-Variate-Forecasting is the model file that contains the model.
2. Run all the code blocks to view the outputs for every districts.
3. The output is shown in the terminal as graphs and tabular columns.
4. The code runs first for predicting the maximum temperature followed by the AQI prediction.
5. The code also does automatically exports the model information into an excel file to the folder `model_results`.
