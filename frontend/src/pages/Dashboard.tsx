import Logout from "../components/Logout";
import "./Dashboard.css";
import Accordion from 'react-bootstrap/Accordion';
import {BsPlusLg} from 'react-icons/bs';
import {Card} from "react-bootstrap";

export default function Dashboard () {
    return(
        <div className={"DashboardPage"}>
            <h4>Hello --Member--</h4>
            <button>
                Menu Side Bar Button
            </button>
            <Accordion>
                <Card className={"DashboardPageProjectCreatorCard"}>
                    <Card.Header>Create a new project risk assessment</Card.Header>
                    <button><BsPlusLg size={26}/></button>
                </Card>
            </Accordion>
            <Accordion>
                <Accordion.Item eventKey={"1"}>
                    <Accordion.Header>View your risk assessments for planned projects</Accordion.Header>
                    <Accordion.Body>
                        {"ProjectOverviewComponent needs to be here"}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"2"}>
                    <Accordion.Header>View your risk assessments for current projects</Accordion.Header>
                    <Accordion.Body>
                        {"ProjectOverviewComponent needs to be here"}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"3"}>
                    <Accordion.Header>View your risk assessments for finished projects</Accordion.Header>
                    <Accordion.Body>
                        {"ProjectOverviewComponent needs to be here"}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Logout/>
        </div>

    );
}