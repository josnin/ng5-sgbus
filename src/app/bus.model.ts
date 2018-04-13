//declare module namespace {

    export interface BusRoute {
        ServiceNo: string;
        Operator: string;
        Direction: number;
        StopSequence: number;
        BusStopCode: string;
        Distance: number;
        WD_FirstBus: string;
        WD_LastBus: string;
        SAT_FirstBus: string;
        SAT_LastBus: string;
        SUN_FirstBus: string;
        SUN_LastBus: string;
    }

    export interface NextBus {
        OriginCode: string;
        DestinationCode: string;
        EstimatedArrival: Date;
        Latitude: string;
        Longitude: string;
        VisitNumber: string;
        Load: string;
        Feature: string;
        Type: string;
    }

    export interface NextBus2 {
        OriginCode: string;
        DestinationCode: string;
        EstimatedArrival: Date;
        Latitude: string;
        Longitude: string;
        VisitNumber: string;
        Load: string;
        Feature: string;
        Type: string;
    }

    export interface NextBus3 {
        OriginCode: string;
        DestinationCode: string;
        EstimatedArrival: Date;
        Latitude: string;
        Longitude: string;
        VisitNumber: string;
        Load: string;
        Feature: string;
        Type: string;
    }

    export interface Service {
        ServiceNo: string;
        Operator: string;
        NextBus: NextBus;
        NextBus2: NextBus2;
        NextBus3: NextBus3;
    }

    export interface RootObject {
        "odata.metadata": string;
        BusStopCode: string;
        Services: Service[];
    }

    //}


