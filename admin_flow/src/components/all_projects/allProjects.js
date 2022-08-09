
import React from 'react'
import { Table } from 'react-bootstrap';
import ProjectRow from './ProjectRow';

export default function AllProjects() {
    return (
        <div  style={{padding:"2%"}}>
            <Table className='allProjects' responsive style={{ padding: "2%" }}>
                <thead>
                    <tr>
                        <th className='primary'>
                            Project
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            Duration
                        </th>
                        <th>
                            Update
                        </th>
                    </tr>

                </thead>

                <tbody>
                    <tr>
                        <ProjectRow name="Tree Plantation" complete={true} duration="Dates Here"></ProjectRow>
                    </tr>

                    <tr>
                        <ProjectRow name="Beach Cleanup" complete={true} duration="Set of Dates Here"></ProjectRow>
                    </tr>

                    <tr>
                        <ProjectRow name="Gender Equality Campaign" complete={false} duration="Dates Here"></ProjectRow>
                    </tr>



                </tbody>


            </Table>

        </div>

    );
}

