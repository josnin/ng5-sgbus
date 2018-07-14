import json
import urllib
from urlparse import urlparse
import httplib2 as http #External library

if __name__=="__main__":
#Authentication parameters
    headers = { 'AccountKey' : 'fiteT+ywT6eoODxjn1IHLg==',
    'accept' : 'application/json'} #this is by default

    #API parameters
    uri = 'http://datamall2.mytransport.sg/' #Resource URL
    path = '/ltaodataservice/BusStops?$skip=5000'
    #Build query string & specify type of API call
    target = urlparse(uri + path)
    print target.geturl()
    method = 'GET'
    body = ''

    #Get handle to http
    h = http.Http()
    #Obtain results
    response, content = h.request(
        target.geturl(),
        method,
        body,
        headers)

    print content

    #Parse JSON to print
    jsonObj = json.loads(content)
    print json.dumps(jsonObj, sort_keys=True, indent=4)

    #Save result to file
    print json.dumps(jsonObj, sort_keys=True, indent=4)

    #Save result to file
    with open("bus_stops_skip_5000.json","w") as outfile:
        #Saving jsonObj["d"]
        json.dump(jsonObj, outfile, sort_keys=True, indent=4, ensure_ascii=False)
