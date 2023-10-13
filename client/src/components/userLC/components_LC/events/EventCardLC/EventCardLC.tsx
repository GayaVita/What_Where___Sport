import React, { useState } from 'react';
import { Form, Button, Card, ListGroup, Accordion, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from './eventCard.module.css';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import {
  deleteEvent,
  getAllEvents,
  rejectSubscribersRequest,
} from '../../../../../store/eventSlice/asyncThunk';
import SubscriberCard from '../SubscriberCard/SubscriberCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function EventCardLC(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { events, subscribers } = useAppSelector((store) => store.events);
  console.log('events', events);
  console.log('subscribers', subscribers);

  React.useEffect(() => {
    dispatch(getAllEvents());
  }, []);

  return (
    <>
      <Container>
        <Row style={{ marginTop: '5vh' }}>
          <Col>
            {events &&
              events.map((event) => (
                <Accordion defaultActiveKey={event.id}>
                  <Accordion.Item eventKey={event.id}>
                    <Accordion.Header>{event.activity_type}</Accordion.Header>
                    <Accordion.Body>
                      <div style={{ alignItems: 'center', textAlign: 'center', marginBottom: '15px' }}>
                        <Button
                          variant="secondary"
                          type="button"
                          onClick={() => dispatch(deleteEvent(event?.id))}
                          style={{margin: "auto 0"}}
                        >
                          Отменить!
                        </Button>
                      </div>
                      <Table striped hover>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="/public/img/LC/stadium.svg"
                                alt="object"
                                className={styles.event_svg}
                              />
                            </td>

                            <td>
                              <ListGroup>
                                <ListGroup.Item>{event?.Location?.location_title}</ListGroup.Item>
                              </ListGroup>
                            </td>          
                            <td>
                              <img
                                src="/public/img/LC/map2.svg"
                                alt="street"
                                className={styles.event_svg}
                              />
                            </td>

                            <td>
                              <ListGroup>
                                <ListGroup.Item>
                                  {event?.Location?.location_district},{' '}
                                  {event?.Location?.location_address}
                                </ListGroup.Item>
                              </ListGroup>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="/public/img/LC/calendar.svg"
                                alt="date"
                                className={styles.event_svg}
                              />
                            </td>

                            <td>
                              <ListGroup>
                                <ListGroup.Item>
                                  {event?.activity_date?.slice(0, 10)}{' '}
                                </ListGroup.Item>
                              </ListGroup>
                            </td>

                            <td>
                              <img
                                src="/public/img/LC/time.svg"
                                alt="time"
                                className={styles.event_svg}
                              />
                            </td>

                            <td>
                              <ListGroup>
                                <ListGroup.Item>{event?.activity_time} </ListGroup.Item>
                              </ListGroup>
                            </td>
                          </tr>
                        </tbody>
                        <td colSpan={4}>
                          <div className={styles.all_event_users}>
                            {event?.Subscribers?.length > 0 &&
                              event?.Subscribers?.map((subscriber) => (
                                <SubscriberCard key={subscriber.id} subscriber={subscriber} />
                              ))}
                          </div>
                        </td>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}
