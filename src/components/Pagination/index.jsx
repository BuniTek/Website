import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";


const PaginationStyles = styled.div`
   display: grid;
   grid-template-columns: auto 1fr auto;
   text-align: center;
   margin: 2rem 10%;
   background: transparent;
   justify-items: center;
   align-items: center;
   @media(max-width: 768px){
       grid-template-columns: 1fr;
       grid-gap: 1rem;
   }
   & > * {
       display: inline;
       text-decoration: none;
       padding: 4px;
       margin: 0;
       box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
   }
   a[disabled]{
       pointer-events: none;
       cursor: not-allowed;
   }
`;

const Pagination = ({ totalCount, currentPage, pathPrefix }) => {
    const totalPages = Math.ceil(totalCount / 10);
    const nextPage = currentPage + 1;
    const prevPage = currentPage - 1;
    return (
        <PaginationStyles>
            <Link disabled={prevPage <= 0 ? true : null} to={`${pathPrefix}${prevPage}`}>
                <ArrowLeftOutlined />
            </Link>
            <p>Page {currentPage} of {totalPages}</p>
            <Link disabled={nextPage > totalPages ? true : null} to={`${pathPrefix}${nextPage}`}>{nextPage > totalPages ? `That's all folks` : <ArrowRightOutlined />}</Link>
        </PaginationStyles>
    );
};

Pagination.propTypes = {
    totalCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number,
    pathPrefix: PropTypes.string.isRequired,
};

Pagination.defaultProps = {
    currentPage: 1,
};

export default Pagination;