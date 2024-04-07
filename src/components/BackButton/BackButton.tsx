/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router';
import ActionButton, { ButtonType } from '../ActionButton/ActionButton';
import { ReactComponent as ArrowBackIcon } from '../../assets/icons/arrow_back.svg';
import { css } from '@emotion/react';

const CSS_BACK_BUTTON = css({
    position: 'absolute',
});

interface BackButtonProps {
    link: string;
}

function BackButton(props: BackButtonProps) {
    const { link } = props;
    const navigate = useNavigate();

    return (
        <div css={CSS_BACK_BUTTON}>
            <ActionButton
                onClick={() => navigate(link)}
                buttonType={ButtonType.INVISIBLE_ON_WHITE}
                isIcon
            >
                <ArrowBackIcon width="24px" height="24px" />
            </ActionButton>
        </div>
    );
}

export default BackButton;
