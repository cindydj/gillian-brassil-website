/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router';
import ActionButton from '../ActionButton/ActionButton';
import { ReactComponent as ArrowBackIcon } from '../../../assets/icons/arrow_back.svg';
import { css } from '@emotion/react';
import { ButtonType } from '../button_defs';

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
                <ArrowBackIcon width="1.6rem" height="1.6rem" />
            </ActionButton>
        </div>
    );
}

export default BackButton;
