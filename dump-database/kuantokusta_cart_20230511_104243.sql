--
-- PostgreSQL database dump
--

-- Dumped from database version 10.23 (Ubuntu 10.23-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 12rc1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

--
-- Name: cart; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cart (
    cartid integer NOT NULL,
    userid integer NOT NULL
);


ALTER TABLE public.cart OWNER TO postgres;

--
-- Name: cart_cartid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.cart ALTER COLUMN cartid ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.cart_cartid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: cartitem; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cartitem (
    productid integer NOT NULL,
    qt integer NOT NULL,
    itemid integer NOT NULL,
    value integer NOT NULL,
    "cartidCartid" integer
);


ALTER TABLE public.cartitem OWNER TO postgres;

--
-- Name: productslist_itemid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.cartitem ALTER COLUMN itemid ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.productslist_itemid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: cart PK_3944aa0dddfbda26751c5a11142; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT "PK_3944aa0dddfbda26751c5a11142" PRIMARY KEY (cartid);


--
-- Name: cartitem PK_4889490a78cbfd8df6fe85f37dc; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cartitem
    ADD CONSTRAINT "PK_4889490a78cbfd8df6fe85f37dc" PRIMARY KEY (itemid);


--
-- Name: cartitem FK_d6056caa391f28f56ae7668c7dc; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cartitem
    ADD CONSTRAINT "FK_d6056caa391f28f56ae7668c7dc" FOREIGN KEY ("cartidCartid") REFERENCES public.cart(cartid);


--
-- PostgreSQL database dump complete
--

