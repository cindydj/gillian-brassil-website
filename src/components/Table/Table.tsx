/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { useScreenSizeBreakpoints } from '../../hooks/useScreenSizeBreakpoints';
import { getBoldFontWeight } from '../../utils/text_formatting';

interface TableProps {
    columns: { columnName: string; widthPercentage: string }[];
    data: { [column: string]: React.ReactNode }[];
    /**
     * Allow for one row to be emphasized. This is for the use case
     * of emphasizing the current auth user's team's row in the leaderboard.
     */
    emphasizedRowIndex?: number;
}

function Table(props: TableProps) {
    const { columns, data, emphasizedRowIndex } = props;
    const screenSize = useScreenSizeBreakpoints();
    const theme = useTheme();

    const cssTable = css({
        borderCollapse: 'collapse',
        fontSize: '18px',
        tr: {
            textAlign: 'left',
            height: '40px',
        },
        'th, td': {
            padding: '4px 8px',
        },
        width: '100%',
    });

    const cssTableHeader = css({
        tr: {
            borderBottom: `1px solid ${theme.colors.table.border}`,
            th: {
                fontWeight: getBoldFontWeight(screenSize),
            },
        },
    });

    const cssTableBody = css({
        tr: {
            borderBottom: `1px solid ${theme.colors.table.border}`,
        },
    });

    const cssHighlightedRow = css({
        backgroundColor: theme.colors.background.selection,
        fontWeight: getBoldFontWeight(screenSize),
    });

    return (
        <>
            <table css={cssTable}>
                <colgroup>
                    {columns.map(({ columnName, widthPercentage }) => {
                        return <col key={columnName} css={{ width: widthPercentage }} />;
                    })}
                </colgroup>
                <thead css={cssTableHeader}>
                    <tr>
                        {columns.map(({ columnName }) => {
                            return <th key={columnName}>{columnName}</th>;
                        })}
                    </tr>
                </thead>
                <tbody css={cssTableBody}>
                    {data.map((rowData, index) => {
                        return (
                            <tr
                                key={index}
                                css={index === emphasizedRowIndex ? cssHighlightedRow : {}}
                            >
                                {columns.map(({ columnName }) => {
                                    if (!rowData[columnName]) {
                                        console.error(
                                            `The Table "data" prop is malformed and column ${columnName} could not be found. Please use the column names as keys for each entry.`,
                                        );
                                    }
                                    return <td key={columnName}>{rowData[columnName]}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Table;
